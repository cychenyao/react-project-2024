import React from 'react';

// 创建一个函数式HOC
const withData = (WrappedComponent, fetchData, fetchData1) => {
    // 返回一个新的函数式组件
    return (props) => {
        const [data, setData] = React.useState(null);
        const [loading, setLoading] = React.useState(true);
        const [error, setError] = React.useState(null);
        fetchData1();
        React.useEffect(() => {
            const loadData = async () => {
                try {
                    setLoading(true);
                    const result = await fetchData();
                    setData(result);
                } catch (err) {
                    setError(err);
                } finally {
                    setLoading(false);
                }
            };
            loadData();
        }, []);

        // 根据加载状态渲染不同的内容
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error.message}</div>;

        // 渲染被包装的组件，并传递数据和其他props
        return <WrappedComponent data={data} {...props} />;
    }
}
// 使用HOC的例子
const UserList = ({ data }) => (
    <ul>
      {data.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );

const fetchUsers = () => {
    const result = fetch('https://jsonplaceholder.typicode.com/users')
    return result.then(res => res.json());
}

const fetchUsers1 = () => {
    const result = fetch('https://jsonplaceholder.typicode.com/users')
    result.then(res => res.json()).then(result => {console.log(result.length); return result.length*2}).then(result => {
        console.log(result);  // 2
        return result * 2;
      } );
}

const EnhancedUserList = withData(UserList, fetchUsers,fetchUsers1);

export default EnhancedUserList