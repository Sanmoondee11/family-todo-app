// import React, { useEffect, useState } from 'react';
// import { supabase } from './supabase';

// function ProtectedPage() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       const { data } = await supabase.auth.getUser();
//       setUser(data.user);
//     };

//     fetchUser();
//   }, []);

//   if (!user) {
//     return <p>このページを見るにはログインが必要です。</p>;
//   }

//   return <div>ログイン済みのユーザーのみが閲覧できます。</div>;
// }

// export default ProtectedPage;
