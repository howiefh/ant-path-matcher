![Node.js CI](https://github.com/howiefh/ant-path-matcher/actions/workflows/node.js.yml/badge.svg)

An implementation for Ant-style path patterns.

Part of this mapping code has been kindly borrowed from [Apache Ant](https://ant.apache.org/) and [Spring Framework AntPathMatcher](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/util/AntPathMatcher.html).

The mapping matches URLs using the following rules:

- `?` matches one character
- `*` matches zero or more characters
- `**` matches zero or more directories in a path
- `{spring:[a-z]+}` matches the regexp `[a-z]+` as a path variable named "spring"

Examples

- `com/t?st.jsp` — matches com/test.jsp but also com/tast.jsp or com/txst.jsp
- `com/*.jsp` — matches all .jsp files in the com directory
- `com/**/test.jsp` — matches all test.jsp files underneath the com path
- `org/springframework/**/*.jsp` — matches all .jsp files underneath the org/springframework path
- `org/**/servlet/bla.jsp` — matches org/springframework/servlet/bla.jsp but also org/springframework/testing/servlet/bla.jsp and org/servlet/bla.jsp
- `com/{filename:\\w+}.jsp` will match com/test.jsp and assign the value test to the filename variable

Note: a pattern and a path must both be absolute or must both be relative in order for the two to match. Therefore it is recommended that users of this implementation to sanitize patterns in order to prefix them with "/" as it makes sense in the context in which they're used.

## Install

```
npm install @howiefh/ant-path-matcher --save
```

## Usage

```
import AntPathMatcher from '@howiefh/ant-path-matcher';

var pathMatcher = new AntPathMatcher();

pathMatcher.match("/?", "/a");
pathMatcher.match("test/*", "test/t");
pathMatcher.match("/**", "/testing/testing");
pathMatcher.match("/{bla}.*", "/testing.html");
```