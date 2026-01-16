// server-app/src/app.ts
import documentRoutes from './routes/document.routes';
app.use('/api/doc', documentRoutes); // B 添加的代码，位置与 A 冲突
import authRoutes from './routes/auth.routes';
app.use('/api/auth', authRoutes); // A 添加的代码
