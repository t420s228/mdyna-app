import { connect } from 'react-redux';
import TaskEditor from '../components/Tasks/TaskEditor';
import { changeTaskSetting, saveTask, addTask, addReminder } from '../store/actions/';

function mapDispatchToProps(dispatch) {
  return {
    changeTaskSetting: (prop, value) => {
      dispatch(changeTaskSetting(prop, value));
    },
    saveTask: (task) => {
      dispatch(saveTask(task));
    },
    addTask: (todoProps) => {
      dispatch(addTask(todoProps));
    },
    addReminder: (todoProps) => {
      dispatch(addReminder(todoProps));
    },
  };
}
function mapStateToProps(state) {
  return {
    editorSettings: state.editor,
    categories: state.categories,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskEditor);
