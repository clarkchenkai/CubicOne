# CubicOne

CubicOne is a personal fork of [T3 Code](https://github.com/pingdotgg/t3code), an open-source control surface for coding agents. A Node WebSocket server wraps the agent CLIs on your machine and serves a desktop app, a web app, and a mobile app that can control them locally or remotely.

Works with your own subscriptions on Claude Code, Codex, Cursor, Grok Build, OpenCode, and Google Antigravity. If they are set up on your computer, CubicOne can drive them.

## What is different from T3 Code

- Branding: app name, icon (orange tile with a white "1"), wordmarks, and user-facing copy.
- Isolation: bundle id `com.cubic.cubicone`, Electron user data in `cubicone-code`, and state under `~/.cubicone` instead of `~/.t3`, so CubicOne runs side by side with an installed T3 Code without sharing a server or database.
- No hosted cloud: T3 Connect, the hosted web app, and the store-distributed mobile apps are upstream services. CubicOne ships without them unless you configure your own.

Everything else follows upstream. Internal identifiers such as `@t3tools/*` package names, `T3CODE_*` environment variables, the `t3code://` URL scheme, and the `t3.json` project file are kept unchanged to make upstream merges cheap.

## Installation

CubicOne is built from source. There is no install script, Homebrew cask, or package registry entry.

> [!WARNING]
> Install and authenticate at least one provider before use:
>
> - Codex: install [Codex CLI](https://developers.openai.com/codex/cli) and run `codex login`
> - Claude: install [Claude Code](https://claude.com/product/claude-code) and run `claude auth login`
> - Cursor: install [Cursor CLI](https://cursor.com/cli) and run `agent login`
> - Grok Build: install [Grok Build CLI](https://x.ai/cli) and run `grok login`
> - OpenCode: install [OpenCode](https://opencode.ai) and run `opencode auth login`
> - Antigravity: enable it in Settings, then use **Install Antigravity** and **Sign in with Google**. No CLI is required.

### Prerequisites

- Node.js 24 (`engines.node` in `package.json`)
- pnpm 11.10 (`corepack use pnpm@11.10.0`)
- [Vite+](https://viteplus.dev/guide/) for the global `vp` command:

```bash
curl -fsSL https://vite.plus | bash
```

On Windows, in PowerShell:

```powershell
irm https://vite.plus/ps1 | iex
```

### Build the desktop app (macOS)

```bash
git clone https://github.com/clarkchenkai/CubicOne.git
cd CubicOne
vp i
node scripts/build-desktop-artifact.ts --platform mac --target dmg --arch arm64 --output-dir release
```

The DMG and a zipped `.app` land in `release/`. Use `--arch x64` for Intel Macs, `--platform linux --target AppImage` or `--platform win --target nsis` for other platforms.

### Run from source

```bash
vp run dev            # server and web app
vp run dev:desktop    # Electron client
```

## Documentation

Full docs live in [docs/](./docs). They are inherited from upstream and still use the T3 Code name in places.

- [Install and first run](./docs/user/install.md)
- [Permission modes](./docs/user/permission-modes.md)
- [Keyboard shortcuts](./docs/user/keybindings.md)
- [Project settings](./docs/user/project-settings.md)
- [Remote access from a phone or another machine](./docs/user/remote-access.md)
- [Keeping app and server in sync](./docs/user/updating.md)
- [Source control integrations](./docs/user/source-control.md)
- Multiple accounts: [Codex](./docs/user/providers-codex.md) · [Claude](./docs/user/providers-claude.md)
- [Run as a background service](./docs/user/background-service.md)

Building on the code? Start at [docs/internals/overview.md](./docs/internals/overview.md).

## Tracking upstream

- `main` mirrors `upstream/main` and is never developed on.
- `cubicone` is the default and development branch.

To pull in an upstream release:

```bash
git checkout main && git pull upstream main && git push origin main
git checkout cubicone && git merge main
```

Resolve conflicts, rebuild, and push `cubicone`.

## License and credit

MIT, same as upstream. T3 Code is built by [T3 Tools](https://t3.codes); this fork would not exist without their work.
