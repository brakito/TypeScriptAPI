import { DiaryEntry, NewDiary, NonSensitiveInfoDiaryEntry } from '../types';
import diaryData from './diaries.json';

const diaries: DiaryEntry[] = diaryData as DiaryEntry[];
export const getEntries = (): DiaryEntry[] => diaries;

export const getSafeEntriesInfo = (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({id, date, weather, visibility}) => {
        return {id, date, weather, visibility}
    });
};

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
    const entry = diaries.find(d => d.id === id);
    if (entry != null) {
        const {comment, ...restEntry} = entry;
        return restEntry;
    }
    return undefined;
}

export const findByIdComment = (id: number): string | undefined => {
    const entry = diaries.find(d => d.id === id);
    if (entry != null) {
        const {comment} = entry;
        return comment;
    }
    return undefined;
}

export const addDiary = (newDiaryEntry: NewDiary): DiaryEntry => {
    const newDiary = {
        id: Math.max(...diaries.map(d => d.id)) + 1,
        ...newDiaryEntry
    }
    diaries.push(newDiary);
    return(newDiary);
}