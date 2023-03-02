export enum DispatcherActions {
    UPDATE = 'UPDATE',
    DONE = 'DONE'
}

export interface UpdateState {
    shouldUpdate: boolean
  }
  
export interface Action {
    type: string
  }