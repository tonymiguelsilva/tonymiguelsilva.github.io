import { expect, test } from 'vitest';
import { cloudValidation, localQuality, dataclyraCase } from './engineering-cases';

test('Local PROD has 14 passing tests with no warnings or errors', () => {
 expect(localQuality).toEqual({ tests: 14, pass: 14, warn: 0, error: 0 });
});
test('GCP dataset has the documented record counts', () => {
 expect([cloudValidation.orders, cloudValidation.orderItems, cloudValidation.clients, cloudValidation.products]).toEqual([5000, 15078, 500, 100]);
});
test('GCP has 20 passing tests and no other outcomes', () => {
 expect([cloudValidation.tests, cloudValidation.pass, cloudValidation.warn, cloudValidation.error, cloudValidation.skip]).toEqual([20, 20, 0, 0, 0]);
});
test('GCP financial reconciliation has zero difference', () => {
 expect([cloudValidation.reconciledAmount, cloudValidation.difference]).toEqual([110682385.35, 0]);
});
test('GCP documents 12 models and 6 sources', () => {
 expect([cloudValidation.models, cloudValidation.sources]).toEqual([12, 6]);
});
test('DataClyra preserves its existing public platform destination', () => {
 expect(dataclyraCase.platform).toBe('https://dataclyra-analytics.onrender.com/');
});
