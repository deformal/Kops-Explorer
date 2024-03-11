import * as vscode from "vscode";
import { newCluster } from "./commands/newCluster";

export async function activate(context: vscode.ExtensionContext) {
  await newCluster();
}

export function deactivate() {}
