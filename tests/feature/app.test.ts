import { describe, expect, test } from '@jest/globals';
import request from 'supertest';
import app from '../../src/app';

describe('Root URL',()=>{

    test('Should return Ok status', async ()=>{
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });

});