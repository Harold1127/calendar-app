// src/app/components/Reminders/RemindersView.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { setShowReminderForm } from '../../../../redux/features/reminderSlice';
import CurrentDateDisplay from './CurrentDateDisplay';
import ReminderForm from './ReminderForm';
import ReminderList from './ReminderList';
import Banner from './Banner';

const RemindersView: React.FC = () => {
  const dispatch = useDispatch();
  const showForm = useSelector((state: RootState) => state.reminder.showReminderForm);

  const handleAddReminderClick = () => {
    dispatch(setShowReminderForm(true));
  };

  return (
    <div className='p-10 w-3/5'>
      <CurrentDateDisplay onAddReminderClick={handleAddReminderClick} />
      {!showForm && <Banner />} 
      {showForm && <ReminderForm />}
      <ReminderList />
    </div>
  );
};

export default RemindersView;
