/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Task.css';
import PropTypes from 'prop-types';

export type TaskModel = {
    id: string; title: string; state: string; updatedAt?: Date; 
}

type Props = { 
    task: TaskModel; 
    onArchiveTask: (id: string) => void;
    onPinTask: (id: string) => void; 
}

function Task({ task: { id, title, state }, onArchiveTask, onPinTask }: Props): JSX.Element
{
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title">
        <input type="text" value={title} readOnly={true} placeholder="Input title" />
      </div>

      <div className="actions" onClick={event => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          <button onClick={() => onPinTask(id)}>
            <span className={'icon-star'} />
          </button>
        )}
      </div>
    </div>
  );
}

Task.propTypes = {
    task: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
    }),
    onArchiveTask: PropTypes.func,
    onPinTask: PropTypes.func,
  };

export default Task;