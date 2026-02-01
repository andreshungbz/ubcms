{
  description = "Node.js v24 (LTS)";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  };

  outputs =
    { self, nixpkgs }:
    let
      systems = [
        "x86_64-linux"
        "aarch64-darwin"
      ];
    in
    {
      devShells = nixpkgs.lib.genAttrs systems (
        system:
        let
          pkgs = import nixpkgs { inherit system; };
        in
        {
          default = pkgs.mkShell {
            packages = [
              pkgs.nodejs_24
              pkgs.zsh
            ];

            shellHook = ''
              if [ -z "$ZSH_VERSION" ]; then
                export SHELL=${pkgs.zsh}/bin/zsh
                exec ${pkgs.zsh}/bin/zsh -l
              fi
            '';
          };
        }
      );
    };
}
