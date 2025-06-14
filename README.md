# Ecommerce Platform

A modern, full-featured ecommerce platform built with Next.js, designed for scalability and performance.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with custom styling
- **Product Management**: Comprehensive product catalog with search and filtering
- **Shopping Cart**: Full shopping cart functionality with persistent state
- **User Authentication**: Secure user registration and login system
- **Order Management**: Complete order processing and tracking
- **Admin Dashboard**: Administrative interface for managing products and orders
- **Mobile Responsive**: Optimized for all device sizes
- **SEO Optimized**: Built-in SEO features with Next.js

## 🛠️ Tech Stack

- **Frontend**: Next.js 13+ (React Framework)
- **Styling**: Custom CSS/SCSS
- **Type Safety**: TypeScript (via .eslintrc.json configuration)
- **Package Management**: npm/yarn
- **Development**: ESLint for code quality

## 📁 Project Structure

```
├── components/          # Reusable UI components
├── context/            # React Context providers
├── lib/                # Utility functions and configurations
├── pages/              # Next.js pages and API routes
├── public/             # Static assets (images, icons, etc.)
├── sanity_shopping/    # Sanity CMS integration for product management
├── styles/             # Global styles and component-specific styles
├── .env                # Environment variables
├── .eslintrc.json      # ESLint configuration
├── .gitignore          # Git ignore rules
├── next.config.js      # Next.js configuration
├── package.json        # Project dependencies
└── README.md           # Project documentation
```

## 🏗️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Git

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure your environment variables:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_sanity_token
   # Add other required environment variables
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗃️ Content Management

This project uses Sanity CMS for content management. The `sanity_shopping` directory contains the Sanity studio configuration.

### Setting up Sanity

1. **Install Sanity CLI**
   ```bash
   npm install -g @sanity/cli
   ```

2. **Navigate to Sanity directory**
   ```bash
   cd sanity_shopping
   ```

3. **Install Sanity dependencies**
   ```bash
   npm install
   ```

4. **Start Sanity Studio**
   ```bash
   npm start
   ```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy automatically

### Alternative Deployment Options

- **Netlify**: Configure build settings for Next.js
- **AWS**: Use AWS Amplify or EC2
- **Docker**: Containerized deployment

## 📱 Key Components

- **Product Catalog**: Browse and search products
- **Shopping Cart**: Add/remove items, quantity management
- **User Authentication**: Login/register functionality
- **Checkout Process**: Secure payment processing
- **Order Tracking**: Real-time order status updates
- **Admin Panel**: Product and order management

## 🎨 Customization

### Styling
- Global styles are located in the `styles/` directory
- Component-specific styles follow the naming convention
- Customize colors, fonts, and layouts as needed

### Components
- All reusable components are in the `components/` directory
- Follow the existing component structure for consistency
- Use TypeScript for type safety

## 🔧 Configuration

### Next.js Configuration
The `next.config.js` file contains:
- Image optimization settings
- Build configurations
- Environment-specific settings

### ESLint Configuration
Code quality is maintained through ESLint rules defined in `.eslintrc.json`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Development Guidelines

- Follow the existing code structure and naming conventions
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation when necessary
- Ensure code passes ESLint checks

## 🐛 Bug Reports

If you find a bug, please create an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Environment details

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Check existing documentation
- Review the project wiki (if available)

## 🔄 Updates

This project is actively maintained. Check the commit history for recent updates and improvements.

---

**Built with ❤️ using Next.js and modern web technologies**
