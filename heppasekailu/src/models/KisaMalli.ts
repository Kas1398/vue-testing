import { PoniMalli } from './PoniMalli';
export interface KisaMalli {
    name: string;
    id: number;
    ponies: Array<PoniMalli>;
    startInstant: string;
}