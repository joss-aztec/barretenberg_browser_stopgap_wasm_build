/* tslint:disable */
/* eslint-disable */
/**
* @param {Uint8Array} circuit
* @param {Map<any, any>} initial_witness
* @param {Function} oracle_resolver
* @returns {Promise<Map<any, any>>}
*/
export function solve_intermediate_witness(circuit: Uint8Array, initial_witness: Map<any, any>, oracle_resolver: Function): Promise<Map<any, any>>;
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

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly solve_intermediate_witness: (a: number, b: number, c: number) => number;
  readonly intermediate_witness_to_assignment_bytes: (a: number, b: number) => void;
  readonly acir_to_constraints_system: (a: number, b: number) => void;
  readonly public_input_length: (a: number, b: number) => void;
  readonly public_input_as_bytes: (a: number, b: number) => void;
  readonly __wbg_wasmerruntimeerror_free: (a: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h2a0f13ccd7a0f6a1: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly _dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hddf568bbd2cec14e: (a: number, b: number, c: number, d: number) => void;
  readonly _dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__ha1332b2391fa9c75: (a: number, b: number, c: number, d: number) => void;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly wasm_bindgen__convert__closures__invoke2_mut__hb975e39d46035113: (a: number, b: number, c: number, d: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
