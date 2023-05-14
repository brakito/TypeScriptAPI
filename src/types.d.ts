import { Weather, Visibility } from "./enums";

export interface DiaryEntry {
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string
};

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>;

export type NewDiary = Omit<DiaryEntry, 'id'>;