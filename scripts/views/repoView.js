(function(module) {
  var repoView = {};

  var repoCompiler = Handlebars.compile($('#repo-template').text());
  var followersCompiler = Handlebars.compile($('#followers-template').text());

  repoView.renderRepos = function() {
    $('#about .repos').empty().append(
      repos.withTheAttribute('name')
      .map(repoCompiler)
    );
    $('#about .followers').empty().append(
       repos.followers.map(followersCompiler)
     );
  };
  repos.requestRepos(repoView.renderRepos);

  module.repoView = repoView;
})(window);
