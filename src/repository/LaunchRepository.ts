import express, { response } from 'express';
import { Endpoints } from '../enums';
import { mountEndpoint, mountEndpointWithId } from '../utils/stringUtils';
import AppDataSource from '../data-source';
import Launch from '../model/Launch';
import { BaseRepository } from './interfaces/BaseRepository';

export class LaunchRepository extends BaseRepository<Launch>{
    protected readonly repository = AppDataSource.getRepository(Launch);
}