const { Ability, AbilityBuilder } = require('@casl/ability')

const defineRulesFor = () => {
  const { can, cannot, build, rules } = new AbilityBuilder(Ability)

  can('manage', ['Posts', 'Settings'])
  cannot('delete', 'Posts')

  return build()
}
const ability = defineRulesFor()

console.log(ability.can('delete', 'Posts'))

// ability.can('read', 'Settings')
