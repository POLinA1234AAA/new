// plannedLessonSerializer.js

export const serializePlannedLesson = (plannedLesson) => {
    return {
        planned_lesson: {
            start_time: plannedLesson.start_time,
            end_time: plannedLesson.end_time,
            name: plannedLesson.name,
            account_id: plannedLesson.account_id,
            desc: plannedLesson.desc,
            teachers: plannedLesson.teachers,
            school_id: plannedLesson.school_id,
            lesson_id: plannedLesson.lesson_id,
            lesson: plannedLesson.lesson,
            available_account_ids: plannedLesson.available_account_ids,
        }
    };
};
