import moment from "moment";

export const getPeriodString = (from: Date, to?: Date): string => to == null 
? `${moment(from).calendar()}` 
: `${moment(from).calendar()} - ${moment(to).calendar()}`
