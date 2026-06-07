export type SubmissionStatus = "todo" | "pending" | "approved" | "rejected"

export type AssignmentSubmission = {
  id: string
  assignmentId: string
  courseId: string
  weekId: string
  dayId: string
  submittedText: string
  submittedAt: string
  status: SubmissionStatus
  feedback?: string
  submittedFiles?: { url: string; name: string; type: string }[]
}

export type CourseAssignment = {
  submission_id: string | null
  assignment_id: string
  course_id: string
  week_id: string
  day_id: string
  submitted_text: string | null
  submitted_files: { url: string; name: string; type: string }[] | null
  submitted_at: string | null
  submission_status: SubmissionStatus | null
  feedback: string | null
  reviewed_at: string | null
  marks_obtained: number | null
  course_title: string
  title: string
  due_date: string | null
  module_id: string
  scope: "course"
}

export type StandaloneAssignment = {
  assignment_id: string
  title: string
  instructions: string
  due_date: string | null
  total_marks: number | null
  allowed_submission_types: string[]
  attached_files: { url: string; name: string; type: string }[]
  reference_links: { label: string; url: string }[]
  scope: "course" | "common"
  course_title: string | null
  course_id: string | null
  submission_id: string | null
  submitted_text: string | null
  submitted_files: { url: string; name: string; type: string }[] | null
  submitted_at: string | null
  submission_status: SubmissionStatus | null
  feedback: string | null
  marks_obtained: number | null
  created_at?: string
}

export type Assignment = CourseAssignment | StandaloneAssignment
