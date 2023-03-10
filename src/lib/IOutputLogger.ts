export interface IOutputLogger {
    BeginRun(): Promise<void>;
    EndRun(): Promise<void>;
    LogState(runId: number, timeStamp: Date, inputState: Array<boolean>, outputState: Array<boolean>): Promise<void>;
    WriteHeader(inputNames: string[], outputNames: string[]): Promise<void>;
}
