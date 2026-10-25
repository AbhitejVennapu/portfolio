import { Fragment, useEffect, useRef, useState } from 'react'
import {
    COMMANDS,
    DESCRIPTIONS,
    EDUCATION,
    EXPERIENCE,
    PROJECTS,
    GITHUB_URL,
    LINKEDIN_URL,
    CONTACT_EMAIL,
} from '../data/terminal-data'
import './Terminal.css'

const BOOT_STEPS = ['loading profile', 'resolving experience', 'mounting projects']

const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

const hasFinePointer = () => window.matchMedia('(hover: hover)').matches

const currentTheme = () => {
    const explicit = document.documentElement.getAttribute('data-theme')
    if (explicit) return explicit
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const toggleTheme = () => {
    document.documentElement.setAttribute(
        'data-theme',
        currentTheme() === 'dark' ? 'light' : 'dark'
    )
    return currentTheme()
}

/* turns **term** into a highlighted <b>; the strings are static, not user input */
const rich = (text) =>
    text.split(/\*\*(.+?)\*\*/).map((part, i) => (i % 2 ? <b key={i}>{part}</b> : part))

const closest = (cmd) =>
    COMMANDS.find(
        (c) =>
            c.indexOf(cmd) === 0 ||
            cmd.indexOf(c) === 0 ||
            c.split(' ')[0] === cmd.split(' ')[0]
    ) || null

const completionFor = (value) => {
    const typed = value.toLowerCase()
    if (!typed) return null
    const match = COMMANDS.find((c) => c.indexOf(typed) === 0 && c !== typed)
    return match || null
}

function Welcome() {
    return (
        <div className="out">
            <h1 className="name">Abhitej Vennapu</h1>
            <p className="sub accent">Frontend-focused software developer</p>
            <dl className="kv">
                <dt>experience</dt>
                <dd>4+ years</dd>
                <dt>now</dt>
                <dd>Software Developer, Everest Systems GmbH</dd>
                <dt>based</dt>
                <dd>Heidelberg, Germany</dd>
                <dt>stack</dt>
                <dd>TypeScript, React, Redux, Java</dd>
            </dl>
            <p className="note">
                Tap a command below, or type one. <span className="accent">help</span> lists
                everything.
            </p>
        </div>
    )
}

function Boot({ shown }) {
    return (
        <div className="out boot">
            {BOOT_STEPS.slice(0, shown).map((step) => (
                <div key={step}>
                    {step} ... <span className="ok">ok</span>
                </div>
            ))}
        </div>
    )
}

function Entries({ items }) {
    return items.map((it) => (
        <div className={`entry${it.now ? ' now' : ''}`} key={it.role}>
            <div className="head">
                <span className="role">{it.role}</span>
                <span className="when">{it.when}</span>
            </div>
            <div className="org">
                {it.org}
                <span> / {it.where}</span>
            </div>
            <ul>
                {it.points.map((pt) => (
                    <li key={pt}>{rich(pt)}</li>
                ))}
            </ul>
        </div>
    ))
}

function Contact() {
    return (
        <dl className="kv">
            <dt>github</dt>
            <dd>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                    github.com/AbhitejVennapu
                </a>
            </dd>
            <dt>linkedin</dt>
            <dd>
                {LINKEDIN_URL ? (
                    <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                        linkedin profile
                    </a>
                ) : (
                    <span className="placeholder">[ add your LinkedIn profile URL here ]</span>
                )}
            </dd>
            <dt>email</dt>
            <dd>
                {CONTACT_EMAIL ? (
                    <span className="selectable">{CONTACT_EMAIL}</span>
                ) : (
                    <span className="placeholder">[ add your email address here ]</span>
                )}
            </dd>
        </dl>
    )
}

/* the output for each command; `theme` is computed when run, so its text is current */
function outputFor(cmd, themeName) {
    switch (cmd) {
        case 'help':
            return (
                <>
                    <dl className="cmds">
                        {COMMANDS.map((c) => (
                            <Fragment key={c}>
                                <dt>{c}</dt>
                                <dd>{DESCRIPTIONS[c]}</dd>
                            </Fragment>
                        ))}
                    </dl>
                    <p className="note">
                        Tab completes, up and down arrows recall earlier commands.
                    </p>
                </>
            )
        case 'whoami':
            return (
                <>
                    <p className="row strong">Abhitej Vennapu</p>
                    <p className="row">
                        Frontend-focused software developer with 4+ years of experience. Builds
                        fast, clear web apps and tests them.
                    </p>
                    <p className="row"> </p>
                    <dl className="kv">
                        <dt>role</dt>
                        <dd>Software Developer, Everest Systems GmbH</dd>
                        <dt>focus</dt>
                        <dd>ERP, HR and Cloud Cost modules in TypeScript</dd>
                        <dt>before</dt>
                        <dd>
                            React and Redux (Retcor), PHP and Selenium (Venture Leap), Java and
                            TestNG (Deloitte USI)
                        </dd>
                        <dt>degree</dt>
                        <dd>MSc Computer Science, RPTU Kaiserslautern-Landau</dd>
                    </dl>
                </>
            )
        case 'ls projects':
        case 'ls':
            return PROJECTS.map((p) => (
                <div className="proj" key={p.name}>
                    <div>
                        <span className="pn">{p.name}/</span>
                        <span className="kind">  {p.kind}</span>
                    </div>
                    <p>{p.desc}</p>
                </div>
            ))
        case 'cat experience':
            return <Entries items={EXPERIENCE} />
        case 'cat education':
            return <Entries items={EDUCATION} />
        case 'contact':
            return <Contact />
        case 'gui':
            return (
                <>
                    <p className="row accent">GUI view: coming soon.</p>
                    <p className="note">Stay in the terminal for now. Type help to see what is available.</p>
                </>
            )
        case 'theme':
            return <p className="row muted">theme: {themeName}</p>
        default:
            return null
    }
}

export default function Terminal() {
    const [entries, setEntries] = useState([])
    const [bootShown, setBootShown] = useState(0)
    const [booting, setBooting] = useState(true)
    const [value, setValue] = useState('')
    const screenRef = useRef(null)
    const latestRef = useRef(null)
    const inputRef = useRef(null)
    const nextId = useRef(0)
    const history = useRef([])
    const historyIndex = useRef(0)

    /* boot sequence, skipped under reduced motion */
    useEffect(() => {
        if (prefersReducedMotion()) {
            setBootShown(BOOT_STEPS.length)
            setBooting(false)
            return
        }
        let shown = 0
        const timer = setInterval(() => {
            shown += 1
            setBootShown(shown)
            if (shown >= BOOT_STEPS.length) {
                clearInterval(timer)
                setTimeout(() => setBooting(false), 200)
            }
        }, 160)
        return () => clearInterval(timer)
    }, [])

    /* show the start of the newest output, not the end of it */
    useEffect(() => {
        const screen = screenRef.current
        const latest = latestRef.current
        if (!screen || !latest) return
        screen.scrollTop = latest.offsetTop - screen.offsetTop - 4
    }, [entries])

    useEffect(() => {
        if (hasFinePointer()) inputRef.current?.focus()
    }, [booting])

    const addEntry = (echo, body) => {
        const id = nextId.current++
        setEntries((prev) => [...prev, { id, echo, body }])
    }

    const run = (raw) => {
        const cmd = raw.trim().toLowerCase().replace(/\s+/g, ' ')
        setValue('')
        if (!cmd) return
        history.current.push(raw)
        historyIndex.current = history.current.length

        if (cmd === 'clear') {
            setEntries([])
            screenRef.current && (screenRef.current.scrollTop = 0)
            return
        }

        let body
        if (cmd === 'theme') {
            body = outputFor(cmd, toggleTheme())
        } else if (COMMANDS.includes(cmd) || cmd === 'ls') {
            body = outputFor(cmd)
        } else {
            const suggestion = closest(cmd)
            body = (
                <>
                    <p className="row muted">command not found: {cmd}</p>
                    <p className="row muted">
                        {suggestion
                            ? `Did you mean "${suggestion}"? Or type help.`
                            : 'Type help to see what is available.'}
                    </p>
                </>
            )
        }
        addEntry(cmd, body)
    }

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            run(value)
        } else if (e.key === 'ArrowUp') {
            e.preventDefault()
            if (historyIndex.current > 0) {
                historyIndex.current -= 1
                setValue(history.current[historyIndex.current])
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault()
            historyIndex.current = Math.min(history.current.length, historyIndex.current + 1)
            setValue(
                historyIndex.current < history.current.length
                    ? history.current[historyIndex.current]
                    : ''
            )
        } else if (e.key === 'Tab') {
            e.preventDefault()
            const typed = value.trim().toLowerCase()
            const matches = COMMANDS.filter((c) => c.indexOf(typed) === 0)
            if (matches.length === 1) {
                setValue(matches[0])
            } else if (matches.length > 1) {
                addEntry(typed, <p className="row muted">{matches.join('   ')}</p>)
            }
        }
    }

    /* clicking the transcript focuses the prompt on desktop, unless text is being selected */
    const onScreenClick = (e) => {
        if (e.target.closest('a, button')) return
        const selection = window.getSelection && String(window.getSelection())
        if (selection) return
        if (hasFinePointer()) inputRef.current?.focus()
    }

    const suffix = completionFor(value)
    const latestIndex = entries.length - 1

    return (
        <div className="term">
            <div className="bar">
                <span className="dots" aria-hidden="true">
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
                <span className="title">abhitej@portfolio: ~</span>
                <button className="theme-btn" type="button" onClick={() => run('gui')}>
                    gui
                </button>
                <button className="theme-btn" type="button" onClick={() => run('theme')}>
                    theme
                </button>
            </div>

            <div
                className="screen"
                ref={screenRef}
                role="log"
                aria-live="polite"
                onClick={onScreenClick}
            >
                {booting ? (
                    <Boot shown={bootShown} />
                ) : (
                    <>
                        <Welcome />
                        {entries.map((entry, i) => (
                            <div
                                className="out"
                                key={entry.id}
                                ref={i === latestIndex ? latestRef : null}
                            >
                                {entry.echo !== null && (
                                    <p className="echo">
                                        <span className="ps">~$ </span>
                                        <span className="typed">{entry.echo}</span>
                                    </p>
                                )}
                                {entry.body}
                            </div>
                        ))}
                    </>
                )}
            </div>

            <div className="rail" aria-label="Commands">
                {COMMANDS.map((c) => (
                    <button key={c} type="button" onClick={() => run(c)}>
                        {c}
                    </button>
                ))}
            </div>

            <div className="input-row">
                <span className="ps" aria-hidden="true">
                    <span className="ps-host">abhitej@portfolio:</span>~$
                </span>
                <div className="input-wrap">
                    <div className="ghost" aria-hidden="true">
                        {suffix && (
                            <>
                                <span>{value}</span>
                                {suffix.slice(value.length)}
                            </>
                        )}
                    </div>
                    <input
                        ref={inputRef}
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onKeyDown={onKeyDown}
                        autoComplete="off"
                        autoCapitalize="off"
                        autoCorrect="off"
                        spellCheck={false}
                        enterKeyHint="go"
                        aria-label="Terminal command"
                        placeholder="type a command"
                    />
                </div>
                <span className="hint" aria-hidden="true">
                    <kbd>Tab</kbd> complete
                </span>
            </div>
        </div>
    )
}
