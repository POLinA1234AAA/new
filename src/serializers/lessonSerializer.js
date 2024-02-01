
export const serializeLesson = (lesson) => {
    return {
        lesson: {
            planned_lesson_id: lesson.planned_lesson_id,
            specific_time: lesson.specific_time,
            theme: lesson.theme,
            desc: lesson.desc,
            files: lesson.files,
        }
    };
};
