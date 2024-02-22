# Pokémon-GA Document

このサイトは、Pokémon=GA についての説明をしているサイトです。

以下、このサイトの URL です。
[https://pokemon-ga-document.yukiosada.work/](https://pokemon-ga-document.yukiosada.work/)

## 以下、開発時のルールを書いています。

1. 作業しようとする際には、まずその内容の issue を作成する

※ issue を作成した際、必ず Label も付ける

2. レポジトリを clone し、正しいと思われるブランチ名で develop ブランチから feature ブランチを作成する

※ 取り組もうとしている issue にセルフで Assign する

3. 作業終了後、develop ブランチに PRs をし、各自コンフリクトを解消してからマージする

### 使用するパッケージマネージャー

#### yarn

### 使用を推奨している Visual Studio Code の拡張機能

#### Prettier - Code formatter

### branch のルール

##### 最終的に merge するブランチ (完成品をマージするブランチ)

必ず、develop ブランチか release ブランチからマージされること

-   main

##### 実際に完成品として main にマージする前に検証するブランチ

-   release

##### PRs をするブランチ (Default branch)

-   develop

#### 以下のブランチは、すべて develop ブランチにマージすること

※例外的に release ブランチにマージしてもよいことがあるが、担当者に確認のこと

##### 機能を追加する際に作成するブランチ

-   feature/feat/#[issue-number]-[issue-summary]

    example) feature/feat/#12-add-card-button-component

##### バグ修正をする際に作成するブランチ

-   feature/bugfix/#[issue-number]-[issue-summary]

    example) feature/bugfix/#12-fix-button-function

##### バグ以外の修正や変更をする際に作成するブランチ

-   feature/fix/#[issue-number]-[issue-summary]

    example) feature/fix/#12-change-title

##### 設定の変更等をする際に作成するブランチ

-   feature/config/#[issue-number]-[issue-summary]

    example) feature/config/#12-add-prettier-config

##### その他、以下の条件の下で勝手に新たな種類の feture ブランチを作成してもよい

-   feature/[github の username]/[自由にして良い部分]/#[issue-number]-[issue-summary]

    example) feature/myxogastria0808/nyoki/#112-add-my-config-file
