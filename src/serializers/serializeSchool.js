// schoolSerializer.js

export const serializeSchool = (school) => {
    return {
        school: {
            name: school.name,
            planned_lessons: school.planned_lessons,
            user_id: school.user_id,
            role: school.role,
            teachers: school.teachers,
        }
    };
};
