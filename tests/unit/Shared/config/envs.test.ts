import { describe, expect, test } from "@jest/globals";
import envs from '../../../../src/Shared/config/envs';

describe('Env config', ()=>{
    test('Should contain PORT and NODE_ENV', ()=>{
        expect(envs).toHaveProperty('PORT');
        expect(envs).toHaveProperty('NODE_ENV');
    })
})