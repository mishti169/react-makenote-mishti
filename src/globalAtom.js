import { atom } from 'jotai';
import { OTHERS_NOTES_LS, PINNED_NOTES_LS } from './constants';

export const inputTitle = atom('');
export const inputText = atom('');

const ans = localStorage.getItem(PINNED_NOTES_LS) || '[]';
const finalAns = JSON.parse(ans);
export const pinNote = atom(finalAns);

const ans2 = localStorage.getItem(OTHERS_NOTES_LS) || '[]';
const finalAns2 = JSON.parse(ans2);
export const otherNote = atom(finalAns2);
