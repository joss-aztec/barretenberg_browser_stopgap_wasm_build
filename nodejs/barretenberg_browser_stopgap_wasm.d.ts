/* tslint:disable */
/* eslint-disable */
/**
* @param {Uint8Array} circuit
* @param {Map<any, any>} initial_witness
* @returns {Map<any, any>}
*/
export function solve_intermediate_witness(circuit: Uint8Array, initial_witness: Map<any, any>): Map<any, any>;
/**
* @param {Map<any, any>} intermediate_witness
* @returns {Uint8Array}
*/
export function intermediate_witness_to_assignment_bytes(intermediate_witness: Map<any, any>): Uint8Array;
/**
* A struct representing an aborted instruction execution, with a message
* indicating the cause.
*/
export class WasmerRuntimeError {
  free(): void;
}
