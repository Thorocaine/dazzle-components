import React from 'react';
import { defaultTasks } from './TaskList.stories';
import TaskList from './TaskList';
import {actions } from './Task.stories';
// import TaskList from './TaskList';

type Props = {error?: string};

function PureInboxScreen({ error }: Props): JSX.Element 
{
  if (error) 
{
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <TaskList tasks={defaultTasks} {...actions} />
    </div>
  );
}

export {PureInboxScreen}
// export default connect(({ error }) => ({ error }))(PureInboxScreen);