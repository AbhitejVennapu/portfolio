import * as React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import { Typography, Stack, Box } from '@mui/material'

const Experience = () => {
    return (
        <Box>
            <Typography sx={{ fontWeight: 700, textAlign: 'left' }}>
                Experience
            </Typography>
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Stack>
                            <Typography variant="fontSize1">
                                {' '}
                                Apr 2023 - MAY 2024
                            </Typography>
                            <Typography variant="fontSize1">
                                {' '}
                                Bielefeld, Germany
                            </Typography>
                        </Stack>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Stack>
                            <Typography variant="bold">
                                {' '}
                                Web Developer | Working Student
                            </Typography>
                            <Typography variant="fontSize2">
                                {' '}
                                Retcor GmbH
                            </Typography>
                        </Stack>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Stack>
                            <Typography variant="bold">
                                {' '}
                                Software Engineer | Working Student
                            </Typography>
                            <Typography variant="fontSize2">
                                Venture Leap GmbH
                            </Typography>
                        </Stack>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Stack>
                            <Typography variant="fontSize1">
                                {' '}
                                Jan 2022 - Jan 2023
                            </Typography>
                            <Typography variant="fontSize1">
                                {' '}
                                Berlin, Germany
                            </Typography>
                        </Stack>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Stack>
                            <Typography variant="fontSize1">
                                {' '}
                                Jan 2019 - June 2021
                            </Typography>
                            <Typography variant="fontSize1">
                                {' '}
                                Hyderabad, India
                            </Typography>
                        </Stack>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Stack>
                            <Typography variant="bold">
                                {' '}
                                Associate Software QC Engineer
                            </Typography>
                            <Typography variant="fontSize2">
                                {' '}
                                Deloitte US Offices of India
                            </Typography>
                        </Stack>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Box>
    )
}

export default Experience
