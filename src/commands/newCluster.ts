import * as vscode from "vscode";

export async function newCluster() {
  vscode.commands.registerCommand("kops-explorer.newCluster", async () => {
    const clusterName = await vscode.window.showInputBox({
      prompt: "Enter Cluster Name",
      placeHolder: "Cluster Name",
    });

    if (clusterName) {
      const clusterUri: vscode.Uri = vscode.Uri.joinPath(
        vscode.workspace.workspaceFolders![0].uri,
        clusterName
      );

      //SECTION: ask to choose an aws region

      try {
        await vscode.workspace.fs.createDirectory(clusterUri);
        vscode.window.showInformationMessage(
          `Cluster ${clusterName} created successfully.`
        );
      } catch (error) {
        vscode.window.showErrorMessage(`Failed to create cluster: ${error}`);
      }
    }
  });
}
