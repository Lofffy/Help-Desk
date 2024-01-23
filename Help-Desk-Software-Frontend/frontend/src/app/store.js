import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import workflowsReducer from "../features/workflows/workflowsSlice";
import { analyticsReducer, agentAnalyticsReducer } from '../features/analytics/analyticsSlice';
import{reportReducer,ticketsReducer} from '../features/Reports/reportSlice'
import { knowledgeReducer } from '../features/KnowledgeBase/KnowledgeSlice';
import logsReducer from '../features/logs/logsSlice';
import backupReducer from '../features/backup/backupSlice';
export const store = configureStore({
  reducer: {
      auth: authReducer,
      workflows: workflowsReducer,
      analytics: analyticsReducer, 
      agentAnalytics: agentAnalyticsReducer,
      reports:reportReducer,
      tickets:ticketsReducer,
      knowledge: knowledgeReducer,  
      logs: logsReducer,
      backups: backupReducer,
  },
});