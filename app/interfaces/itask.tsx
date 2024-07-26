export default interface ITask {
  text: string;
  id?: number;
  finished?: boolean;
  changeFinishedState?: (id: number) => void;
  deleteTask?: (id: number) => void;
  setFinishedTasks?: () => void;
}