import { spawn } from "node:child_process";

export function copy(data: string) {
    const proc = spawn('pbcopy');
    proc.stdin.write(data); proc.stdin.end();
}