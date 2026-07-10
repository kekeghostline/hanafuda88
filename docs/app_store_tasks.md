# App Store 公開タスク一覧

花合わせ（HANA AWASE）v0.0.1 — © 2026 Hitonomigi Inc.

---

## フェーズ1：コード整備 ✅ 完了

| \# | タスク | 詳細 | 状態 |
| :---- | :---- | :---- | :---- |
| 1 | デバッグログ削除 | `startTurn`・`cpuPlay`・`afterDraw` の `console.log` を除去 | \[x\] コメントアウト済み・対応完了 |
| 2 | 月不一致バグ根本修正 | `fmSafe()` の暫定対処を恒久修正 | \[-\] 様子見（暫定対処で安定中） |
| 3 | SEファイル用意 | `sounds/se_take.mp3`（カードを取る） `sounds/se_discard.mp3`（捨てる） `sounds/se_draw.mp3`（山札めくり） `sounds/se_yaku.mp3`（役成立・フケ） `sounds/se_seisan.mp3`（精算モーダル） `sounds/se_btn.mp3`（ボタンタップ） | \[x\] 完了 |
| 4 | BGMファイル用意 | `sounds/bgm_main.mp3`（ループ再生・volume 0.4） | \[x\] 完了 |

---

## フェーズ2：Capacitor化 ✅ 完了

| \# | タスク | 状態 |
| :---- | :---- | :---- |
| 5 | `npm init` \+ Capacitor CLI導入 | \[x\] 完了 |
| 6 | `capacitor.config.ts` 設定（appId: `inc.hitonomigi.hanafuda88`） | \[x\] 完了 |
| 7 | `@capacitor/ios` 追加・`npx cap add ios` | \[x\] 完了 |
| 8 | `npx cap copy ios` でWebAssets転送 | \[x\] 完了（`www/`移行済み） |
| 9 | Xcodeで動作確認（シミュレータ・実機） | \[x\] 完了（iPhone 16 / iOS 18.6 シミュレータで確認） |

---

## フェーズ3：App Store申請準備

| \# | タスク | 備考 | 状態 |
| :---- | :---- | :---- | :---- |
| 10 | Apple Developer Program登録 | 法人（Hitonomigi Inc.）で登録済 | \[x\] 完了 |
| 11 | App Store Connectでアプリ登録 | Bundle ID `inc.hitonomigi.hana-awase` / SKU `hana-awase01` | \[x\] 完了 |
| 12 | アプリアイコン作成 | 扇状3枚デザイン・@capacitor/assetsで生成済 | \[x\] 完了 |
| 13 | スクリーンショット撮影 | iPhone 16 Pro Max（6.9"）等で撮影済 | \[x\] 完了 |
| 14 | プライバシーポリシーURL用意 | [https://hitonomigi.co.jp/privacy-policy.html](https://hitonomigi.co.jp/privacy-policy.html) | \[x\] 完了 |
| 15 | アプリ説明文・キーワード作成 | 日本語で入力済（©・罫線は使用不可） | \[x\] 完了 |
| 16 | 年齢レーティング設定 | 4+（模擬ギャンブルなしで回答） | \[x\] 完了 |
| 17 | Provisioning Profile / 証明書設定 | Team: Hitonomigi Inc. / 実機デバイス登録・PLA同意済 | \[x\] 完了 |
| 18 | Archive → TestFlight配布 | ⚠️ **ブロック中**：iOS 26 SDK（Xcode 26）必須。現Mac（MacBookAir9,1 / Intel）は macOS 26 非対応のためApple Silicon Mac調達待ち | \[-\] 待機中 |
| 19 | 審査提出 | App Review | \[ \] |

---

## ⚠️ リスク事項

| 項目 | 対応 |
| :---- | :---- |
| **SDK要件（ブロッカー）** | App Store提出には iOS 26 SDK（Xcode 26以降）が必須。Xcode 26 は macOS 26 (Tahoe) が必要で、Tahoe は Apple Silicon 専用。現行の Intel Mac（MacBookAir9,1）では対応不可 → Apple Silicon Mac（Mac mini M4 等、メモリ16GB以上推奨）の調達が必要 |
| ギャンブル審査 | 賭け要素なし（点数計算のみ）をメタデータで明示。年齢レーティングは4+で取得済 |
| LocalStorage | プライバシーポリシー（[https://hitonomigi.co.jp/privacy-policy.html）にデータ保存の説明を記載済](https://hitonomigi.co.jp/privacy-policy.html）にデータ保存の説明を記載済) |
| 著作権 | カード画像はオリジナルデザイン（2026 Hitonomigi Inc.）確認済 |
| 入力制限 | App Store Connect の概要欄では `©` と罫線（`─`）が使用不可 |

