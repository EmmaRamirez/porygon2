import { stylesheet } from "typestyle"

export type Interactable = {
    disabled?: boolean;
}

export const interactable: Parameters<typeof stylesheet>[0] = {
    base: {
        cursor: 'pointer',
    },
    disabled: {
        cursor: 'none',
        opacity: 0.85,
        pointerEvents: 'none',
    }
}