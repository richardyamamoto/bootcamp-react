module.exports={
  presets: [
    // To browser undestands ES6+
    "@babel/preset-env",
    // To browser understands JSX
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties"
  ]
}