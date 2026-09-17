# Install CubicOne

CubicOne runs coding agents on your computer and lets you control them from its
desktop, web, or mobile app. Set up the machine where the agents will work first.

## Requirements

You need an installed, authenticated provider before starting a thread. You can
launch CubicOne and configure providers afterwards.

## Build from source

CubicOne has no install script, package registry entry, or prebuilt release.
Build it with Node.js 24, pnpm 11.10, and `vp`
([prerequisites](https://github.com/clarkchenkai/CubicOne#prerequisites)):

```bash
git clone https://github.com/clarkchenkai/CubicOne
cd CubicOne && vp i
```

### Command line server

```bash
vp run build:desktop
node apps/server/dist/bin.mjs
```

This starts the server and opens the local web app. The `t3` commands in the
rest of these docs (`t3 serve`, `t3 service install`, `t3 app`, `t3 pair`) refer
to this executable; `t3 update` does not apply to a source build, so update it
with `git pull` and a rebuild.

## Desktop app

Build the desktop artifact for your platform, then install it like any other
app (on macOS, unzip the `.app` from `release/` into `/Applications`):

```bash
node scripts/build-desktop-artifact.ts --platform mac --target dmg --arch arm64 --output-dir release
```

Use `--arch x64` for Intel Macs, `--platform linux --target AppImage` for Linux,
or `--platform win --target nsis` for Windows.

### Windows Subsystem for Linux

Choose a WSL distro in **Settings → Connections** to run agents and projects
there. Install the provider CLIs inside that distro. CubicOne installs its own
server runtime there automatically; the first launch after an app update can
take longer.

### Open a project from a terminal

With the desktop app already running on the same machine:

```bash
t3 app
```

This opens a new thread for the current directory, adding the project if needed.
Pass a path, such as `t3 app ../my-project`, to open another directory. It requires
the desktop app, so a standalone server or an SSH session is not enough. If the
command cannot reach the app, start or update the desktop app and try again.

## Mobile app

The mobile app is not distributed through the App Store or Google Play. Build it
from `apps/mobile` with Expo (see [apps/mobile/README.md](../../apps/mobile/README.md)).
The phone connects to a server on another machine. Follow
[remote access](./remote-access.md) to link it through a pairing URL.

If the app crashes during launch, open Settings → Diagnostics on the next launch
that succeeds. It lists startup crashes from the last 7 days with the error and
component stack that store crash reports leave out. Copy the report and paste it
into a GitHub issue. Error messages can quote values from the app, so read it over
before sharing.

## Providers

Open **Settings → Providers** in the web or desktop app, select the environment,
and enable the provider you want. Installation, login, and configuration belong
to that environment's machine, even when you connect from a phone or another
computer.

| Provider    | Install and authenticate                                                                     |
| ----------- | -------------------------------------------------------------------------------------------- |
| Codex       | Install [Codex CLI](https://developers.openai.com/codex/cli), then run `codex login`.        |
| Claude      | Install [Claude Code](https://claude.com/product/claude-code), then run `claude auth login`. |
| Cursor      | Install [Cursor CLI](https://cursor.com/cli), then run `agent login`.                        |
| Grok Build  | Install [Grok Build CLI](https://x.ai/cli), then run `grok login`.                           |
| OpenCode    | Install [OpenCode](https://opencode.ai), then run `opencode auth login`.                     |
| Antigravity | Install and sign in with Google from CubicOne's provider settings.                           |

Provider CLIs must be on the server's `PATH`. If CubicOne cannot find one, set its
**Binary path** in provider settings, especially when using a version manager.
Cursor's executable is `cursor-agent`, although its login command is
`agent login`. Antigravity can use its managed runtime without a `PATH` entry.

When a provider CLI is behind its latest release, its provider card shows the
available version. **Update now** appears only when CubicOne can tell which
installer owns the CLI (its own update command, Homebrew, or a global npm, pnpm,
bun, or Vite+ install) and runs that installer. Otherwise update the CLI the same
way you installed it. Homebrew installs compare against the version Homebrew
offers, which can trail the npm release by a few hours.

Add another provider instance for a separate account or configuration. Each
instance can have its own environment variables, such as API keys or a custom
base URL. Mark secret values as sensitive; after saving, CubicOne does not display
their original values.

For provider-specific setup and accounts, see [Codex](./providers-codex.md),
[Claude](./providers-claude.md), [OpenCode](./providers-opencode.md), and
[Antigravity](./providers-antigravity.md).

## Next steps

- [Working with threads](./thread-sidebar.md): start tasks and organize parallel work.
- [Permission modes](./permission-modes.md): choose when agents ask before acting.
- [Remote access](./remote-access.md): connect from another device.
- [Running in the background](./background-service.md): keep a Linux or macOS host available.
- [Updating CubicOne](./updating.md): update the app and connected servers.
