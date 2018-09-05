import { connect } from 'react-redux';
import NoteList from '../components/Notes/NoteList';
import { toggleEditor, toggleWhiteMode } from '../store/actions/';

function mapDispatchToProps(dispatch) {
  return {
    toggleEditor: () => {
      dispatch(toggleEditor());
    },
    toggleWhiteMode: () => {
      dispatch(toggleWhiteMode());
    },
  };
}
function mapStateToProps(state) {
  return {
    notes: state.filters.searchInput ?
      state.notes.filter(
        d => d.title.toLowerCase().startsWith(state.filters.searchInput.toLowerCase()),
      ) :
      state.notes,
    searchInput: state.filters.searchInput,
    modalOpen: state.editor.toggleEditor,
    whiteMode: state.style.whiteMode,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteList);
