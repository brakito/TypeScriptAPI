import { NewDiary } from "./types";
import { Weather, Visibility } from "./enums"

const parseComment = (commentFromRequest: any): string => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment');
    }
    return commentFromRequest;
}

const parseDate = (dateFromRequest: any): string => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date');
    }
    return dateFromRequest;
}

const parseWeather = (weatherFromRequest: any): Weather => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Incorrect or missing weather');
    }
    return weatherFromRequest;
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Incorrect or missing visibility');
    }
    return visibilityFromRequest;
}

const isString = (value: any): boolean => {return typeof value === 'string'}
const isDate = (date: any): boolean => {return Boolean(Date.parse(date))}
const isWeather = (value: any): boolean => {return Object.values(Weather).includes(value)}
const isVisibility = (value: any): boolean => {return Object.values(Visibility).includes(value)}

const toNewDiaryEntry = (object: any): NewDiary => {
    const newDiaryEntry = {
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
        comment: parseComment(object.comment),
    }
    console.log(newDiaryEntry);
    return newDiaryEntry;
}
export default toNewDiaryEntry;