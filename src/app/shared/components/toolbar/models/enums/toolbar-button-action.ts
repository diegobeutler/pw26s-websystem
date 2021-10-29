import { LabelValue } from "src/app/shared/models/label-value";

export enum ToolbarButtonAction {
    HOMEPAGE = 'Homepage',
    ARTIGO = 'Artigo',
    LOGIN = 'Login/cadastro',
    INFO = 'Saiba mais'
}

export type ToolbarButtonActionType = typeof ToolbarButtonAction[keyof typeof ToolbarButtonAction];

export function getToolbarButtonActionOptions(): LabelValue[] {
    const keys = Object.keys(ToolbarButtonAction);
    return Object.values(ToolbarButtonAction).map((label, index) => {
        return { value: keys[index], label: label };
    });
}

export function getToolbarButtonActionButtonOptions(): LabelValue[] {
    const keys = Object.keys(ToolbarButtonAction);
    return Object.values(ToolbarButtonAction).slice(2).map((label, index) => {
        return { value: keys[index], label: label };
    });
}