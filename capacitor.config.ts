import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'inc.hitonomigi.hanafuda88',
  appName: '花合わせ',
  webDir: 'docs/web',
  server: {
    androidScheme: 'https'
  },
  ios: {
    contentInset: 'always'
  }
};

export default config;
