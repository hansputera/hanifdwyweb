/**
 * Get person age.
 * @param {number} year Person birth year.
 * @param {number} month Person birth month.
 * @param {number} date Person birth date.
 * @return {number}
 */
export const getPersonAge = (
    year, month, date
) => {
    year = Math.floor(year);
    month = Math.floor(month);
    date = Math.floor(date);

    const currentDate = new Date();

    // validate request
    if (
        year > currentDate.getFullYear() ||
        (year >= currentDate.getFullYear() && (
            (currentDate.getMonth()+1) < month ||
            ((currentDate.getMonth()+1) === month && (
                currentDate.getDate() < date
            ))
        ))
    ) {
        return 0;
    }

    return ((currentDate.getMonth()+1) < month ||
    ((currentDate.getMonth()+1) === month &&
        currentDate.getDate() < date)) ?
            (currentDate.getFullYear() - year)-1 : 
            currentDate.getFullYear() - year;
};
