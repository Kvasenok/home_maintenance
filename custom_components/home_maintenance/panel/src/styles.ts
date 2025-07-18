import { css } from 'lit';

export const commonStyle = css`
    :host {
        color: var(--primary-text-color);
        background: var(--lovelace-background, var(--primary-background-color));
    }

    .header {
        background-color: var(--app-header-background-color);
        color: var(--app-header-text-color, white);
        border-bottom: var(--app-header-border-bottom, none);
    }

    .toolbar {
        height: var(--header-height);
        display: flex;
        align-items: center;
        font-size: 20px;
        padding: 0 16px;
        font-weight: 400;
        box-sizing: border-box;
    }

    .main-title {
        margin: 0 0 0 24px;
        line-height: 20px;
        flex-grow: 1;
    }

    .version {
        font-size: 14px;
        font-weight: 500;
        color: rgba(var(--rgb-text-primary-color), 0.9);
    }

    .view {
        height: calc(100vh - 40px);
        display: flex;
        align-content: start;
        justify-content: center;
        flex-wrap: wrap;
        gap: 8px;
    }

    .view > ha-card {
        width: 880px;
        max-width: 880px;
    }

    .view > ha-card:last-child {
        margin-bottom: 20px;
    }

    ha-card {
        display: block;
        padding: 16px;
    }

    .form-row {
        display: flex;
        justify-content: center;
        gap: 8px;
        flex-wrap: wrap;
    }

    .form-field,
    ha-textfield,
    ha-select,
    ha-icon-picker {
        min-width: 265px;
    }

    .filler {
        flex-grow: 1;
    }

    .break {
        flex-basis: 100%;
        height: 0;
    }

    @media (max-width: 600px) {
        .form-row {
            flex-direction: column; /* Stack fields vertically */
        }

        .form-field {
            width: 100%; /* Full width */
        }

        ha-textfield,
        ha-select,
        ha-icon-picker {
            width: 100%;
            box-sizing: border-box;
        }
    }

    .task-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .task-item {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
        gap: 1rem;
        padding: 0.5rem 0;
        border-bottom: 1px solid var(--divider-color);
    }

    .task-header {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .task-content {
        flex: 1;
    }

    .task-actions {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
    }

    .due-soon {
        color: var(--error-color, red);
        font-weight: bold;
    }

    .warning {
        --mdc-theme-primary: var(--error-color);
        color: var(--primary-text-color);
    }

    ha-dialog .form-field {
        margin-bottom: 16px;
        display: flex;
        flex-direction: column;
    }

    ha-dialog .secondary {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-top: 4px;
    }
`;