/* tslint:disable */
/* eslint-disable */
/**
* @param {Uint8Array} circuit
* @param {Map<any, any>} initial_witness
* @param {Function} witness_loader
* @returns {Promise<Map<any, any>>}
*/
export function solve_intermediate_witness(circuit: Uint8Array, initial_witness: Map<any, any>, witness_loader: Function): Promise<Map<any, any>>;
/**
* @param {Map<any, any>} intermediate_witness
* @returns {Uint8Array}
*/
export function intermediate_witness_to_assignment_bytes(intermediate_witness: Map<any, any>): Uint8Array;
/**
* @param {Uint8Array} circuit
* @returns {Uint8Array}
*/
export function acir_to_constraints_system(circuit: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} circuit
* @returns {number}
*/
export function public_input_length(circuit: Uint8Array): number;
/**
* @param {Map<any, any>} public_witness
* @returns {Uint8Array}
*/
export function public_input_as_bytes(public_witness: Map<any, any>): Uint8Array;
/**
* A struct representing an aborted instruction execution, with a message
* indicating the cause.
*/
export class WasmerRuntimeError {
  free(): void;
}
