import { Dispatch, SetStateAction } from 'react';

interface ILanguageData{
    tr: string,
    en: string
}

export interface IFlipCard {
    isFlipped: boolean
    setIsFlipped: Dispatch<SetStateAction<boolean>>
    data: ILanguageData[]
}
