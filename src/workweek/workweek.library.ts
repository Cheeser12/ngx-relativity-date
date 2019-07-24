import { RelativityDate } from '../date.library';

/*
 * interface for work week definition
 */
export interface IWorkWeekDefinition {
    sunday: { start: number; end: number };
    monday: { start: number; end: number };
    tuesday: { start: number; end: number };
    wednesday: { start: number; end: number };
    thursday: { start: number; end: number };
    friday: { start: number; end: number };
    saturday: { start: number; end: number };
}

export const weekdayKey = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
];

// returns whether this date is within the work hours defined
// by the config
export function isDuringWorkHours(): boolean {
    const relativityDate: RelativityDate = this;
    let thisMoment = relativityDate.toMoment();
    console.log(relativityDate);
    if (
        thisMoment.hour() >=
            relativityDate.config.workWeek[weekdayKey[thisMoment.weekday()]].start &&
        thisMoment.hour() <=
            relativityDate.config.workWeek[weekdayKey[thisMoment.weekday()]].end
    ) {
        // console.log('you should be at work right now!');
        return true;
    } else {
        // console.log('take a load off, go home and relax!');
        return false;
    }
}