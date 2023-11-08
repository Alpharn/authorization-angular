import { createReducer, on } from '@ngrx/store';

import * as AuthActions from '../actions/auth.actions';
import { IUser, IAssessment, IAssessmentGraph } from 'src/app/interfaces/user.interface';

export interface AppState {
  user: IUser | null;
  users: IUser[];
  assessments: IAssessment[] | null;
  assessmentGraph: IAssessmentGraph | null;
  loading: boolean;
  error: string | null;
}

export const initialState: AppState = {
  user: null,
  users: [],
  assessments: [],
  assessmentGraph: null,
  loading: false,
  error: null,
};

export const appReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false
  })),
  on(AuthActions.loadAssessments, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(AuthActions.loadAssessmentsSuccess, (state, { assessments }) => ({
    ...state,
    assessments,
    loading: false
  })),
  on(AuthActions.loadAssessmentsFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false
  })),
  on(AuthActions.loadUsers, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(AuthActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false
  })),
  on(AuthActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false
  })),
  on(AuthActions.loadAssessmentGraph, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(AuthActions.loadAssessmentGraphSuccess, (state, { graphData }) => ({
    ...state,
    assessmentGraph: graphData,
    loading: false
  })),
  on(AuthActions.loadAssessmentGraphFailure, (state, { error }) => ({
    ...state,
    assessmentGraph: null,
    error: error,
    loading: false
  })),
);