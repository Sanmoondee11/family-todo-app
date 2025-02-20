import React, { useState } from 'react';
import { signUp, signIn } from '../services/auth';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = async () => {
    if (isLogin) {
      const { error } = await signIn(email, password);
      if (error) {
        alert('ログインエラー: ' + error.message);
      } else {
        alert('ログイン成功');
      }
    } else {
      const { error } = await signUp(email, password);
      if (error) {
        alert('サインアップエラー: ' + error.message);
      } else {
        alert('サインアップ成功！確認メールをチェックしてください');
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl">{isLogin ? 'ログイン' : 'サインアップ'}</h1>
      <input
        className="p-2 border rounded"
        type="email"
        placeholder="メールアドレス"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="p-2 border rounded"
        type="password"
        placeholder="パスワード"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="p-2 bg-blue-500 text-white rounded"
        onClick={handleAuth}
      >
        {isLogin ? 'ログイン' : 'サインアップ'}
      </button>
      <button
        className="p-2 text-blue-500 underline"
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin ? '新規登録はこちら' : 'ログインはこちら'}
      </button>
    </div>
  );
}

export default Auth;
